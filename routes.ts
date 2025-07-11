export const routes = {
	home: "/",
	attractions: { index: "/attractions", details: "/attractions/:slug" },
	marketplace: { index: "/marketplace", details: "/marketplace/:slug" },
	packages: { index: "/packages", details: "/packages/:slug" },
	vooya: "/vooya-wallet/",
	dashboard: {
		index: "/dashboard",
		attractions: {
			index: "/dashboard/attractions",
			new: "/dashboard/attractions/new",
			update: "/dashboard/attractions/:slug",
		},
		marketplace: {
			index: "/dashboard/marketplace",
			details: "/dashboard/marketplace/:slug",
		},
		packages: {
			index: "/dashboard/packages",
			details: "/dashboard/packages/:slug",
		},
	},
};
