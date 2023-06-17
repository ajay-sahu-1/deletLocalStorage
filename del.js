
function handleSubmit(event) {
    event.preventDefault(); 
    
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    
    const userDetails = {
      name: name,
      email: email,
      phone: phone
    };
    
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    
    users.push(userDetails);
    
  
    localStorage.setItem('users', JSON.stringify(users));
    
    
    displayData(users);
    
    
    alert('User details saved successfully!');
    
    
    document.getElementById('myForm').reset();
  }
  
  
  function displayData(users) {
    const userDataDiv = document.getElementById('userData');
    userDataDiv.innerHTML = ''; // Clear the existing content
    
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      
      
      const userContainer = document.createElement('div');
      userContainer.classList.add('user-container');
      
      
      userContainer.innerHTML = `
        <h2>User ${i + 1}:</h2>
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <button class="delete-btn" onclick="deleteUser(${i})">Delete</button>
      `;
      
      
      userDataDiv.appendChild(userContainer);
    }
  }
  
  
  function deleteUser(index) {
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
  
    users.splice(index, 1);
    
    
    localStorage.setItem('users', JSON.stringify(users));
    
  
    displayData(users);
  }
  
  
  document.addEventListener('DOMContentLoaded', function() {
    const users = JSON.parse(localStorage.getItem)
  }
  
