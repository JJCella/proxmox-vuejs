<template>
  <div class="contact-us full-screen">
    <nav class="navbar navbar-ct-default">
      <div class="container">
        <div class="navbar-header">
          <router-link :to="{path:'/'}" class="navbar-brand">PolyInstances</router-link>
        </div>
        <div class="collapse navbar-collapse" id="navigation-example-2">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link :to="{path:'/'}">Home</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="wrapper wrapper-full-page section content">
      <div class="">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h2 class="title text-danger">404 Not Found</h2>
              <h2 class="title">Oops! It seems that this page does not exist.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer-demo">
      <div class="container">
        <nav class="pull-left">
          <ul>
            <li>
              <router-link :to="{path:'/'}">Home</router-link>
            </li>
            <li>
              <router-link :to="{path:'/register'}">Register</router-link>
            </li>
          </ul>
        </nav>
        <div class="copyright pull-right">
          &copy; 2017, made with
          <i class="fa fa-heart heart"></i> by Paper admin
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>
