export const routes = {
	home: "/",
	attractions: { index: "/attractions", details: "/attractions/:slug" },
	marketplace: { index: "/marketplace", details: "/marketplace/:slug" },
	packages: { index: "/packages", details: "/packages/:slug" },
	vooya: "/vooya-wallet/",
	dashboard: {
		index: "/dashboard",
		overview: "/dashboard/overview",
		attractions: {
			index: "/dashboard/attractions",
			new: "/dashboard/attractions/new",
			update: "/dashboard/attractions/:slug"
		},
		bookings: {
			index: "/dashboard/bookings",
			details: "/dashboard/bookings/:slug"
		},
		marketplace: {
			index: "/dashboard/marketplace",
			details: "/dashboard/marketplace/:slug"
		},
		packages: {
			index: "/dashboard/tour-packages",
			new: "/dashboard/tour-packages/new",
			details: "/dashboard/tour-packages/:slug"
		},
		settings: "/dashboard/settings"
	}
};
