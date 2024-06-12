// exports.onCreateBabelConfig = ({ actions }) => {
//     actions.setBabelPlugin({
//       name: 'flow-react-proptypes',
//     });
//   };
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === 'build-html') {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /react-leaflet/,
              use: loaders.null(),
            },
          ],
        },
      });
    }
  };
  