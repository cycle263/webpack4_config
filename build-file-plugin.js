"use strict";

class ShowBuildFilesPlugin {
  constructor(options) {
    this.options = options || {};
  }

  apply(compiler) {
    compiler.hooks.afterCompile.tap("ShowBuildFilesPlugin", compilation => {
      let content = '## Build files:\n\n';

      for (let file in compilation.assets) {
        content += `- file: ${file}\n`;
      }

      content += `\n`;

      compilation.chunks.map(function(chunk, i){
        content += `- chunk ${i}: ${chunk.files}\n`;
      });

      const name = this.options.fileName || 'buildFiles.md';

      compilation.assets[name] = {
        source: function () {
          return content;
        },
        size: function () {
          return content.length;
        }
      };
    });
  }
}

module.exports = ShowBuildFilesPlugin;