// https://www.youtube.com/watch?v=tvXEFL_y6Ds
import { classify } from '@angular-devkit/core/src/utils/strings';
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { normalize } from 'path';
import { HelloWorldOptions } from './helloWorldOptions.model';

export function helloWorld(_options: HelloWorldOptions): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const path: string = _options.name;
    const fileName: string = classify(path);
    _context.logger.info('Starting Hello-world....');

    if (_options.showMessage) {
      _context.logger.info('Ok');
    } else {
      tree.create(normalize(`${fileName}.txt`), 'hello created!');
      return tree;
    }
  };
}
