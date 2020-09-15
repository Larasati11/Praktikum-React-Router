import React from 'react'

class Kontak extends React.Component{
    render() {
        return(
          <div class=" shadow-lg p-3 mb-2 bg-info text-black">
            <div class="card w-100">
  <div class="card-body">
    <h5 class="card-title">Kontak Laras</h5>
    <p class="card-text">Anda Akan Langsung Terhung Ke Nomor Whattsapp Milik Saya</p>
    <p class="card-text">Klik Button Dibawah Ini!</p>
    <a href="https://api.whatsapp.com/send?phone=6281334654455" class="btn btn-primary">Whattsapp</a>
  </div>
</div>
</div>
        )
    }
}

export default Kontak;
