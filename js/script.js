$(document).ready(function() {
    $('#searchButton').click(function() {
        let word = $('#wordInput').val().trim();
        if (word) {
            $.ajax({
                url: `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
                method: 'GET',
                success: function(data) {
                    let meaning = data[0].meanings[0].definitions[0].definition;
                    $('#result').html(`<strong>Definition:</strong> ${meaning}`);
                },
                error: function() {
                    $('#result').html(`<strong style='color:red;'>Sorry, no definition found for "${word}".</strong>`);
                }
            });
        } else {
            $('#result').html(`<strong>Please enter a word.</strong>`);
        }
    });
});