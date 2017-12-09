var log4js = require('log4js');

var printLogs = function() {
    console.log('Start');

    log4js.configure({
        levels: {
            NOTICE: { value: 20001, colour: 'blue' }
        },
        appenders: {
            IPM: {
                type: 'console',
                layout: {
                    type: 'pattern',
                    pattern: '[%r] [%p] [%c] {%x{body}}%n',
                    tokens: {
                        body: function() { return process.pid; }
                    }
                }
            }
        },
        categories: { default: { appenders: ['IPM'], level: 'DEBUG' } }
    });

    const logger = log4js.getLogger('IPM');
    logger.debug('Debug');
    logger.info('One');
    logger.notice('Notice');
    logger.warn('Warn');
    logger.error('Error');
    logger.fatal('Fatal');
}
printLogs();