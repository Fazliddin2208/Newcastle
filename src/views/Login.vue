<template>
  <div class="cover">
      <div class="content">
          <div class="container">
              <div class="left">
                  <img src="../assets/images/logo.png" alt="Logo">
                  <h1>New Castle</h1>
                  <h3>education</h3> 
                  <i class="fa-brands fa-vuejs"></i>
              </div>

              <div class="right">
                  <h3>Kirish</h3>
                  <form action="">
                      <div class="input-field col s6">
                        <i class="material-icons prefix">account_circle</i>
                        <input id="admin-login" type="text" class="validate">
                        <label for="admin-login" class="admin-label">First Name</label>
                      </div>

                      <div class="input-field col s6">
                          <i class="material-icons prefix">lock</i>
                          <input id="password" type="Password" class="validate">
                          <label for="password">Password</label>
                      </div>

                    <input type="submit" value="Kirish" >
                      
                  </form>
              </div>
          </div>
      </div>

  </div>
</template>

<script>
  export default {
      name: 'Login',
      methods: {
          hideLogin:{
              
          }
      },
  }
</script>

<style lang="scss" scoped>

@font-face {
  font-family: Roboto;
  src: url(@/fonts/Roboto-Regular.ttf);
}
label{
  height: 0px;
}
.cover{
  width: 100vw !important;
  height: 100vh !important;
  // border: 2px solid black;
  background-color: #233446;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  position: fixed;
  z-index: 50;
  left: 0;
  top: 0;
  .content{
    background-color: #F2F3F9;
    width: 80%;
    height: 80%;
    border-radius: 15px;
    z-index: 5;
    .container{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      .left{
        width: 40%;
        img{
          margin-top: 10px;
          width: 85%;
        }
        h1{
          font-family: Roboto;
          font-size: 50px;
          margin-top: -60px;
          color: #000000;
        }
        h3{
          font-family: Roboto;
          font-size: 30px;
          color: #000000;
          font-weight: 400;
        }
      }
      .right{
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        h3{
          color: #696CFF;
          margin-bottom: 30px;
          font-family: Roboto;
          font-size: 35px;
        }
        .my-sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        .my-input-group {
          position: relative;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: nowrap;
          flex-wrap: nowrap;
          width: 70%;
          height: 30px;
          border-radius: 8px;
          box-shadow: 0 0 5px #ced4da;
          margin-top: 10px;
        }
        .my-input-group-prepend {
          display: -ms-flexbox;
          display: flex;
        }
        .my-input-group-text {
          display: -ms-flexbox;
          display: flex;
          -ms-flex-align: center;
          align-items: center;
          padding: 0.375rem 0.75rem;
          margin-bottom: 0;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.5;
          color: #495057;
          text-align: center;
          white-space: nowrap;
          background-color: white;
          border-right: 1px solid #ced4da;
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        }
        .my-form-control {
          display: block;
          width: 100%;
          height: 80%;
          border: 1px solid black;
          padding: 0.375rem 0.75rem;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          color: #495057;
          background-color: #fff;
          background-clip: padding-box;
          // border: none;
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
          transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
          &:first-child{
            border-radius: 8px;
          }
          &::placeholder{
            font-size: 13px;
          }
        }
        .link{
          width: 70%;
          margin-top: 10px;
          text-align: right;
          margin-bottom: 40px;
          a{
          color:#C7C7C7;
          text-align: right;
          font-size: 13px;
          font-weight: 300;
          text-decoration: none;
            &:hover{
                text-decoration: underline;
            }
          }
        }
        input[type=submit]{
          width:70%;
          padding: 10px;
          background-color: #696CFF;
          border: 2px solid #696CFF;
          color: white;
          font-weight: 600;
          font-family: Roboto;
          letter-spacing: 4px;
          border-radius: 8px;
          transition: 0.3s all ease;
          &:hover{
                cursor: pointer;
                background:none;
                color: #696CFF;
          }
        }
      }
    }
  }
}

</style>