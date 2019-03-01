interface Window {
  devToolsExtension: any;
  __INITIAL_STATE__: object;
}

interface NodeModule {
  hot: {
    accept(path?: string, callback?: () => void): void;
  };
}
