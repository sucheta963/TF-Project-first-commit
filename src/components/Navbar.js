import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar() {
  return (
    <nav>
<a class="navbar-brand" href="#">
<img src="https://www.techformation.co.in/wp-content/uploads/2018/10/Layer-0.png" alt='Tech Formation' width="200"/>
</a>
  <ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/"></a>
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-expanded="false">Services</a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="/">Web Development</a></li>
      <li><a className="dropdown-item" href="/">Website Design</a></li>
      <li><a className="dropdown-item" href="/">Mobile Development</a></li>
      <li><a className="dropdown-item" href="/">Website Maitainance</a></li>
    </ul>
  </li>

  <li className="nav-item">
    <a className="nav-link" href="/">Portfolio</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="/">Contact</a>
  </li>
<li className="nav-item">
    <a className="nav-link disabled" href="/">Get a quote</a>
  </li>
</ul>
</nav>
  )
}
