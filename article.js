document.addEventListener('DOMContentLoaded', function() {
    const specialIssueElement = document.getElementById('special-issue');

    function getArticleDate() {
        const now = new Date();
        const day = (now.getUTCDate() - 11).toString().padStart(2, '0');
        const month = now.toLocaleString('default', { month: 'long' });
        const year = 2031; // Fixed year as per the requirement
        return `${day} ${month} ${year}`;
    }

    specialIssueElement.textContent = `Special Issue | ${getArticleDate()}`;
});
