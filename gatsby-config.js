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
        'gatsby-transformer-remark'
    ]
};
