

function fillForm() {
    const mockData = {
      name: "mohamed med",
      username: "mohamed.med@example.com",
      email: "mohamed.med@example.com",
      password: "123456789",
      phone: "123-456-7890",
      address: "20 Cooper Square",
      city: "NewYork",
      state: "CA",
      zip: "12345"
    };
  
    document.querySelectorAll('input').forEach(input => {
      const type = input.getAttribute('type');
      const name = input.getAttribute('name') || input.getAttribute('id');
  
      if (name && mockData[name]) {
        input.value = mockData[name];
      } else if (type === 'text') {
        input.value = 'Sample Text';
      } else if (type === 'email') {
        input.value = 'email@example.com';
      } else if (type === 'tel') {
        input.value = '123-456-7890';
      } else if (type === 'number') {
        input.value = '12345';
      }

      // Trigger input and change events
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });
  
    document.querySelectorAll('textarea').forEach(textarea => {
      textarea.value = 'Sample text';
      // Trigger input and change events
      textarea.dispatchEvent(new Event('input', { bubbles: true }));
      textarea.dispatchEvent(new Event('change', { bubbles: true }));
    });
  
    document.querySelectorAll('select').forEach(select => {
      select.selectedIndex = 1;
    });
  }
  
  fillForm();
  