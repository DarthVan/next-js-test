module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
				port: '',
				pathname: '**',
			},
		],
		minimumCacheTTL: 1200,
	},
}