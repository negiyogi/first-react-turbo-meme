import React, { useState } from 'react';

function Home() {
  const divwidth = {
    padding: '5px',
    margin: '5px',
  };
  const [count, setCount] = useState(0);

  function submitdata() {
    var value1 = document.getElementById('nameinput').value;
    if (!value1) {
      alert("Type something idiot");
    } else {
      fetch('https://webhook.site/729d35a4-a572-4628-863a-884296fad7ef', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: value1 }),
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Network response was not ok.');
        })
        .then(data => {
          alert(`Submitted: ${value1.toUpperCase()}`);
          setCount(count + 1);
        })
        .catch(error => {
          console.error('Error submitting data:', error);
          alert('Failed to submit data. Please try again.');
        });
    }
  }

  return (
    <div className='content-wrapper'>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Form</h1>
            </div>
          </div>
        </div>
      </div>
      <div style={divwidth}>
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Quick Example</h3>
          </div>
          <form>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Enter Your Name?</label>
                <input type="text" className="form-control" id="nameinput" placeholder="Enter email" />
              </div>
            </div>
            <div className="card-footer">
              <button type="button" onClick={submitdata} className="btn btn-primary">Submit (convert to uppercase.)</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
