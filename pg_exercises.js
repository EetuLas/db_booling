import { pgPool } from "./pg_connection.js";

//const ADD_COMPANIES = "INSERT INTO company (company_name, address, city) VALUES " +
//"('OAMK', 'Kaitoväylä 1', 'Oulu')," +
//"('OSAO', 'Kotkantie 1', 'Oulu')," +
//"('Amazon', 'TechStreet', 'Washington')," +
//"('Intel', 'Phipath 4', 'New York');"

//async function addCompanies(){
//    try {
//        await pgPool.query(ADD_COMPANIES)
//    } catch (error) {
//        console.log(error.message);
//    }
//}

//addCompanies()

const ADD_EMPLOYEES = "INSERT INTO employee (username, first_name, last_name, age, company) VALUES " +
"('eetu', 'Eetu', 'Lassila', 21, 'OAMK')," +
"('lisa', 'Lisa', 'Simpson', 18, 'OSAO')," +
"('dave', 'Dave', 'Magical', 29, 'Intel')," +
"('musti', 'Musti', 'Kissa', 25, 'Amazon');"

async function addEmployees(){
    try {
        await pgPool.query(ADD_EMPLOYEES)
    } catch (error) {
        console.log(error.message);
    }
}

addEmployees()