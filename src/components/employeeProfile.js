export const renderEmployeeId = (employee) => {
    let employeeCard = document.createElement("div");
    employeeCard.innerHTML = `
            <div class="employee-image" >
            <img src="${employee.profile_url}" title=${employee.name}/></div>
            <h2> ${employee.name} </h2>
            <h3 title="Company Name">${employee.company}</h3>
            <p title="Designation">${employee.Designation}</p>
            <br/>
            <span title="Details">${employee.Details}</span>`
            ;
    employeeCard.className = "employee-card";
    return employeeCard;
};