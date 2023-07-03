export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.6957d9c1.js","app":"_app/immutable/entry/app.66ef8288.js","imports":["_app/immutable/entry/start.6957d9c1.js","_app/immutable/chunks/index.da3d1cc8.js","_app/immutable/chunks/singletons.b3519fdd.js","_app/immutable/chunks/paths.b14c1af4.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.66ef8288.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.da3d1cc8.js"],"stylesheets":[],"fonts":[]},
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
