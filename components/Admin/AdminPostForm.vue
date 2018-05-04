<template>
    <form @submit.prevent="onSave">
        <app-control-input 
            v-model="editedPost.author">
            Author Name
        </app-control-input>
        <app-control-input 
            v-model="editedPost.title">
            Title
        </app-control-input>                        
        <app-control-input 
            v-model="editedPost.thumbnailLink">
            Thumbnail Link
        </app-control-input>
        <app-control-input
                control-type="textarea"
                v-model="editedPost.content">
            Content
        </app-control-input>
        <app-control-input
                control-type="textarea"
                v-model="editedPost.previewText">
            Preview Text
        </app-control-input>
        <app-button type="submit">Save</app-button>
        <app-button
        type="button"
        style="margin-left: 10px"
        btn-style="cancel"
        @click="onCancel">
            Cancel
        </app-button>
    </form>
</template>

<script>
import AppButton from '@/components/UI-Components/AppButton'
import AppControlInput from '@/components/UI-Components/AppControlInput'

export default {
    props: {
        post: {
            type: Object,
            requied: false
        }
    },
    data() {
        return {
            editedPost: this.post ? { ...this.post } : {
                author: '',
                title: '',
                thumbnailLink: '',
                content: '',
                previewText: ''
            }
        }
    },
    methods: {
        onSave(){
            //save post
            this.$emit('submit', this.editedPost)
        },
        onCancel(){
            //navigate back
            this.$router.push('/admin');
        }
    },
    components: {
        'app-button': AppButton,
        'app-control-input': AppControlInput
    }
}
</script>

<style scoped>

</style>
