export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.f896ffea.js","app":"_app/immutable/entry/app.d45eb52f.js","imports":["_app/immutable/entry/start.f896ffea.js","_app/immutable/chunks/index.da3d1cc8.js","_app/immutable/chunks/singletons.a44b2032.js","_app/immutable/chunks/paths.6619d553.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.d45eb52f.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.da3d1cc8.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
