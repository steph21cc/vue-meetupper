<template>
  <div>
    <h1 class="title m-b-sm">Please confirm entered data</h1>

    <div class="content">
      <div >
        <span class="result-title">
        Location
        </span>
        <p>{{meetupToCreate.location || "No Defined"}}</p>
      </div>
      <div>
        <span class="result-title">
        Title
        </span>
        <p>{{meetupToCreate.title || "No Defined"}}</p>
      </div>
      <div>
        <span class="result-title">
        Start Date
        </span>
        <p>{{meetupToCreate.startDate | formatDate}}</p>
      </div>
      <div>
        <span class="result-title">
        From
        </span>
        <p>{{meetupToCreate.timeFrom || "No Defined"}}</p>
      </div>
      <div>
        <span class="result-title">
        To
        </span>
        <p>{{meetupToCreate.timeTo || "No Defined"}}</p>
      </div>
      <div>
        <span class="result-title">
        Category
        </span>
        <p>{{meetupToCreate.category.name || "No Defined"}}</p>
      </div>
      <div>
        <span class="result-title">
        Image
        </span>
        <p>{{meetupToCreate.image || "No Defined" }}</p>
      </div>
      <div>
        <span class="result-title">
        Short Info
        </span>
        <p>{{meetupToCreate.shortInfo || "No Defined"}}</p>
      </div>
      <div>
        <span class="result-title">
        Description
        </span>
        <p>{{meetupToCreate.description || "No Defined"}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      meetupToCreate: {
        required: true,
        type: Object
      }
    },
    validations: {}
  }
</script>

<style scoped>
  .result-title {
    font-size: 29px;
    font-weight: bold;
  }
  .result-title + p {
    font-size: 20px;
  }
</style>