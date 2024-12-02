import React, { useState, useEffect } from "react";

const Employees = () => {
 
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  
  useEffect(() => {
    fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Məlumatı yükləmək mümkün olmadı!");
        }
        return response.json();
      })
      .then((data) => {
        setEmployees(data);
        setLoading(false); 
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  
  if (loading) {
    return <p>Məlumat yüklənir...</p>;
  }

  if (error) {
    return <p>Xəta baş verdi: {error}</p>;
  }

  return (
    <div className="employees-container">
      <h2>İşçilər</h2>
      {employees.length > 0 ? (
        <ul>
          {employees.map((employee) => (
            <li key={employee.id} className="employee-card">
              <h3>{employee.name}</h3>
              <p>Yaş: {employee.age}</p>
              <p>Vəzifə: {employee.position}</p>
              <p>Şəkil:</p>
              <img
                src={employee.avatar}
                alt={`${employee.name} şəkli`}
                style={{ width: "100px", borderRadius: "50%" }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Məlumat tapılmadı.</p>
      )}
    </div>
  );
};

export default Employees;
