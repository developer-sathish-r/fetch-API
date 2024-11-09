function api() {
    return new Promise((resolve, reject) => {
        resolve(fetch("https://jsonplaceholder.typicode.com/users"))
    }).then((response) => response.json())
        .then((json) => json);
}

// async function api(){
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         return data;
// }

function data() {
    api().then(data => data.map(users => {
        const { id, name, username, email, address, phone, website, company } = users;
        const { street, suite, city, zipcode } = address;
        const { name: company_name, catchPhras, bs } = company;

       const table_data=document.getElementById("table_body");
       const table_row=document.createElement("tr");
       const table_id=document.createElement("td");
       const table_name=document.createElement("td");
       const table_userName=document.createElement("td");
       const table_email=document.createElement("td");
       const table_address=document.createElement("td");
       const table_phone=document.createElement("td");
       const table_website=document.createElement("td");
       const table_company=document.createElement("td");

       table_id.innerHTML=id;
       table_name.innerHTML=name;
       table_userName.innerHTML=username;
       table_email.innerHTML=email;
       table_address.innerHTML=`${street}, ${suite}, ${city}, ${zipcode} `
       table_phone.innerHTML=phone;
       table_website.innerHTML=website;
       table_company.innerHTML=`${company_name},${catchPhras},${bs}`;

       table_data.appendChild(table_row);
       table_row.appendChild(table_id);
       table_row.appendChild(table_name);
       table_row.appendChild(table_userName);
       table_row.appendChild(table_email);
       table_row.appendChild(table_address);
       table_row.appendChild(table_phone);
       table_row.appendChild(table_website);
       table_row.appendChild(table_company);
    }))
}

