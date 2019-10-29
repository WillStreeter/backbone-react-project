

export const validIpApiKey = ( key ) => {
    const messages = [];
    if( key.match(/[^0-9a-z]/i)){
       messages.push( 'Only letters and digits allowed!');
    }

    if(key.length !== 32 ){
       messages.push('The key must be at least 32 keys long');
    }

    return messages;
};
