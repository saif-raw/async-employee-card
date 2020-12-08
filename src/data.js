export const getProfile = (async () => {
    //Custom JSON
    let usersData = await axios.get('https://gist.githubusercontent.com/saif-raw/cf25081598d56d09fc1553d4162113c4/raw/b1ba9717a6e90a4725ac65eb49491b56937b59ad/gistfile1.txt');
    return usersData.data;
})();