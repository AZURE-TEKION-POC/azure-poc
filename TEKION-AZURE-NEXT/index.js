module.exports = async function (context, req) {
    console.log(context);
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = `Name : ${name}`;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}