import React from 'react'

class Beranda extends React.Component{
    render() {
        return(
            <div class=" p-3 mb-2 bg-light text-black">
            <div class="jumbotron jumbotron-fluid" >
                <div class="container-fluid" >
                <div class="alert alert-info" role="alert">
                <h3 class="display-4">BERANDA LARAS</h3>
                <p class="lead">Selamat Datang Di Berandaku//Saya Sedang Belajar React :)</p>
                </div>
            </div>
            <div class="card">
  <div class="card-header">
  </div>
  <div class="card-body">
    <h3 class="card-title">LIFE</h3>
    <h2 class="text-info">"Accepting and living life sincerely is one way of living in peace"</h2>
  </div>
</div>
<div class="card">
  <div class="card-header">
  </div>
  <div class="card-body" >
    <h3 class="card-title">LOVE</h3>
    <h2 class="text-info">"For me, love for others cannot be more than love for myself and love for Allah"</h2>
  </div>
</div>
<div class="card">
  <div class="card-header">
  </div>
  <div class="card-body">
    <h3 class="card-title">FAMILY</h3>
    <h2 class="text-info">"Broken home taught me a very big thing, wich is to make peace with wounds"</h2>
  </div>
</div>
            </div>
            </div>
            
        )
    }
}
export default Beranda