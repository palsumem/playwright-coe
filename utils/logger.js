class Logger {

    static info(message) {
        console.log(`[INFO] ${message}`);
    }

    static success(message) {
        console.log(`[PASS] ${message}`);
    }

    static warning(message) {
        console.log(`[WARN] ${message}`);
    }

    static error(message) {
        console.log(`[ERROR] ${message}`);
    }

}

module.exports = Logger;