function parsePrice(price) {

    return parseFloat(

        price.replace(

            '$',

            ''

        )

    );

}

module.exports = {

    parsePrice

};