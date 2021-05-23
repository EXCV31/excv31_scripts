data:text/html,<script>const word = prompt("Enter issue number below:");
const url = 'http://demo.redmine.org/issues/';

if (word == null) {
    window.location = 'http://demo.redmine.org/';
}

if (word) {
    window.location = url + word;
}
</script>
