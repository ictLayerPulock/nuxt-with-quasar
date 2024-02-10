<!-- <template>
  <q-layout view="lHh Lpr lFf">
    <div class="q-pa-md q-gutter-sm" style="width: 100%; max-width: 100%">
    <q-banner inline-actions rounded class="bg-blue text-white">
      LOGO

      <template v-slot:action>
        <q-btn flat label="Home" />
        <q-btn flat label="About" />
        <q-btn flat label="Blog" />
        <q-btn flat label="Shop" />
        <q-btn flat label="Sign In" />
        <q-btn flat label="Sign Up" />
      </template>
    </q-banner>
    </div>



    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
 -->

 <template>
  <div class="">
    <q-layout view="lHh lpr lFf" class="shadow-2">
      <q-header elevated>
        <div class="" style="width: 100%; max-width: 100%">
          <q-banner  to="/" inline-actions rounded class="bg-blue text-white">
            LOGO

            <template v-slot:action>
              <q-btn to="/" flat label="Home" />
              <q-btn to="/about" flat label="About" />
              <q-btn to="/form" flat label="Form" />
              <q-btn to="/table" flat label="Table" />
              <q-btn flat label="Blog" />
              <q-btn flat label="Shop" />
              <q-btn flat label="Sign In" />
              <q-btn flat label="Sign Up" />
            </template>
          </q-banner>
        </div>
      </q-header>

      <q-footer >
        <q-banner class="bg-primary text-white">
          This is Footer Section
          <template v-slot:action>
            <q-btn flat color="white" label="LOGO" />
            <q-btn to="/" flat color="white" label="Home" />
          </template>
        </q-banner>
      </q-footer>

      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </q-layout>
  </div>
</template>

