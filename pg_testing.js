import { pgPool } from "./pg_connection.js";

try{
    const result = await pgPool.query("SELECT * FROM school");
    console.log(result);

}catch(e){
    console.log(e.message);
}