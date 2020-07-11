module.exports = {
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'markdown-pages',
                path: './pages/',
                ignore: ['/src/**']
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-linker',
                ],
            }
        }
    ]
};
