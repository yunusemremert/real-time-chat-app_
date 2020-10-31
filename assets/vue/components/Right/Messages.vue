<template>
    <div class="media w-50 mb-3" :class="{ 'ml-auto' : messages.mine }">
      <img v-if="!messages.mine" src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" class="rounded-circle">
      <div class="media-body" :class="{ 'ml-3' : !messages.mine }">
        <div class="rounded py-2 px-3 mb-2" :class="[ messages.mine ? 'bg-primary' : 'bg-light' ]">
          <p class="text-small mb-0" :class="[ messages.mine ? 'text-white' : 'text-muted' ]">{{ messages.content }}</p>
        </div>
        <p class="small text-muted">{{ date }}</p>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Messages",
    props : {
      messages : Object
    },
    computed : {
      date(){
        return new Date(this.messages.createdAt).toDateString();
      }
    }
  }
</script>