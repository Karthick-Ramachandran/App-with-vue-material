<template>
  <div>
    <div>
      <h2 class="md-title">Upload the exported text file</h2>

      <div class="md-layout md-gutter md-alignment-center-center">
        <div
          class="md-layout-item md-large-size-80 md-medium-size-70 md-small-size-95"
        >
          <md-card>
            <md-card-content>
              <md-field>
                <label>Upload</label>
                <md-file placeholder="Upload the text file" />
              </md-field>
            </md-card-content>
          </md-card>
        </div>
      </div>

      <div class="md-layout md-gutter tl md-alignment-center-center">
        <div
          class="md-layout-item md-large-size-80 md-medium-size-70 md-small-size-95"
        >
          <md-card>
            <md-card-header>
              <div class="md-title">Preview</div>
            </md-card-header>
            <md-card-content>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              repellat repudiandae nisi eius voluptas nobis inventore.
              Reprehenderit temporibus id doloremque, dolore numquam pariatur
              consequuntur maiores provident inventore! Possimus architecto eum
              provident accusantium libero, nihil ab laboriosam necessitatibus
              voluptate doloribus quibusdam ipsam perspiciatis ducimus unde nisi
              tempore quam fugit repudiandae minima impedit dolorem omnis nobis
              dolores cum! Sint id, excepturi similique cum molestias dolorum et
              aspernatur! Vitae possimus distinctio et aperiam suscipit ut
              tempora eos tenetur ullam cupiditate omnis provident dicta
              assumenda aliquid aut, atque obcaecati repellat quod fugit.
              Perferendis incidunt, facere rem hic, quisquam labore nesciunt
              quia veritatis eum nostrum optio necessitatibus quo numquam quam
              dicta. Magnam eligendi doloremque, sunt ab dolor aliquid ut
              architecto eos nihil ea, reprehenderit nemo dolores eaque ad! Ipsa
              reiciendis distinctio deserunt deleniti beatae? Est accusamus
              ducimus magnam dolor illum mollitia deleniti fugit in optio illo!
              Aut natus qui eos laboriosam voluptatibus? Repudiandae veritatis
              animi error ipsam voluptas. Earum labore fugiat itaque aperiam
              commodi, molestias explicabo, aut libero laudantium officiis,
              ratione voluptas perferendis vero consequuntur ullam atque
              doloremque! Enim nesciunt nulla ipsum velit commodi, inventore
              error odit laudantium. Aliquid a nam possimus commodi iure modi
              quos similique, rerum, repudiandae vero odit, error facere minus
              eaque?
            </md-card-content>
          </md-card>
        </div>
      </div>
    </div>
    <Navbar />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  components: {
    Navbar
  }
};
</script>
<style scoped>
h2 {
  text-align: center;
}

.tl {
  margin-top: 2rem;
  text-align: center;
}
</style>
