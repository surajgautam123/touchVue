<template>
<b-container fluid>
  <b-row class="login-register justify-content-md-center">
    <b-col md="9" class="login-container">
      <b-row class="login-vcenter">
        <b-col md="5" class="login-section no-padding tablet-landscape-full-fluid-width">
          <b-form action="/account/login" method="post" class="login">
            <b-row>
              <b-col md="12" class="text-center">
                <h1>Login</h1>
              </b-col>
              <b-col md="12">
                <div class="from-group">
                  <label>Email address</label>
                  <b-form-input type="email" name="email" />
                </div>
                <div class="from-group">
                  <label>Password</label>
                  <b-form-input type="password" name="password" />
                </div>
              </b-col>
              <b-col md="12" class="text-center">
                <a href="#" class="underlined btn-forgot-password">Forgot your password?</a>
              </b-col>
              <b-col md="12" class="text-center m-t20">
                <button type="submit" class="button full-width button button-primary" id="submitLogin">
                  <span class="button-label">Login</span>
                </button>
              </b-col>
            </b-row>
          </b-form>
        </b-col>
        <b-col md="2" class="login-separator"></b-col>
        <b-col md="5" class="register-section no-padding">
          <form action="/account/register" method="post" class="register">
            <b-row>
              <b-col md="12" class="text-center">
                <h1>Create an account</h1>
              </b-col>
              <b-col md="12">
                <div class="from-group">
                  <label>Email address</label>
                  <b-form-input type="email" name="email" />
                </div>
              </b-col>
              <b-col md="12">
                <b-row>
                  <b-col md="6">
                    <div class="from-group">
                      <label>Password</label>
                      <b-form-input type="password" name="password" />
                    </div>
                  </b-col>
                  <b-col md="6">
                    <div class="from-group">
                      <label>Confirm password</label>
                      <b-form-input type="password" name="confirmpassword" />
                    </div>
                  </b-col>
                </b-row>
              </b-col>
              <b-col md="12">
                <label class="text-center">Sign up for email updates and promotions</label>
              </b-col>
              <b-col md="12" class="text-center newsletter-genders-container">
                <div class="radio-input-wrap">
                  <input type="radio" id="gender_men_form" value="Men" name="gender" tabindex="1">
                  <label for="gender_men_form">Men's</label>
                </div>
                <div class="radio-input-wrap">
                  <input type="radio" id="gender_women_form" value="Women" name="gender" tabindex="1">
                  <label for="gender_women_form">Women's</label>
                </div>
                <div class="radio-input-wrap">
                  <input type="radio" id="no_thanks_form" value="no-thanks" name="gender" tabindex="1">
                  <label for="no_thanks_form">No thanks</label>
                </div>
                <div id="error_gender">
                  <!---->
                </div>
              </b-col>
              <b-col md="12" class="text-center m-t20">
                <button type="submit" class="button full-width button button-primary smartphone-landscape-full-width" id="submitRegister">
                  <span class="button-label">Create</span>
                </button>
              </b-col>
              <b-col md="12" class="text-center m-t20">
                <p>When you create an SSENSE account, we collect your email and personal data to enhance your shopping experience and, subject to your agreement, to provide you with exclusive email updates, promotions, and notifications.</p>
                <p class="legal-consent-2">You may unsubscribe at any time.</p>
                <p class="m-b0">To find out more, please visit our
                  <a href="/en-in/privacy-policy">Privacy Policy</a>.
                </p>
              </b-col>
            </b-row>
          </form>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</b-container>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped src="./Login.scss" />
