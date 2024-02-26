const data = {
    fish: 'Salmon',
    weight: '1.5 KG',
    units: 5
  };
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/inventory/add');
  xhr.responseType = 'json';
  xhr.send(JSON.stringify(data));
  
  xhr.onload = () => {
    console.log(xhr.response);
  };
  