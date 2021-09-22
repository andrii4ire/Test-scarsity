module.exports = {
    catalogs: [
        {
            path: '<rootDir>/locale/{locale}',
            include: ['<rootDir>/components', '<rootDir>/pages'],
            exclude: ['**/node_modules/**'],
        },
    ],
    fallbackLocales: {},
    format: 'minimal',
    formatOptions: { origins: false, lineNumbers: false },
    sourceLocale: 'en',
    orderBy: 'messageId',
    pseudoLocale: '',
    rootDir: '.',
}
