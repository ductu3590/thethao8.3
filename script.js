document.addEventListener('DOMContentLoaded', function() {
    // Xử lý chuyển tab
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Xóa class active khỏi tất cả các button và tab pane
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            
            // Thêm class active vào button được click
            this.classList.add('active');
            
            // Hiển thị tab content tương ứng
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Xử lý chuyển đổi section trong mỗi tab
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Tìm parent section-toggle
            const sectionToggle = this.closest('.section-toggle');
            // Xóa active khỏi tất cả các button trong cùng section-toggle
            sectionToggle.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
            // Thêm active vào button được click
            this.classList.add('active');

            // Tìm tab-pane cha
            const tabPane = this.closest('.tab-pane');
            // Xóa active khỏi tất cả các section trong tab-pane
            tabPane.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            // Hiển thị section tương ứng
            const sectionId = this.getAttribute('data-section');
            tabPane.querySelector('#' + sectionId).classList.add('active');
        });
    });

    // Pickleball Rounds Filter
    const roundItems = document.querySelectorAll('.round-item');
    const matchRounds = document.querySelectorAll('.match-round');

    // Hiển thị tất cả các trận đấu khi trang được tải
    function showAllMatches() {
        matchRounds.forEach(round => {
            round.style.display = 'block';
        });
    }

    // Mặc định hiển thị tất cả các trận đấu
    showAllMatches();

    roundItems.forEach(item => {
        item.addEventListener('click', () => {
            // Bỏ active class từ tất cả các nút vòng đấu
            roundItems.forEach(btn => btn.classList.remove('active'));
            
            // Thêm active class vào nút được click
            item.classList.add('active');
            
            // Lấy vòng đấu được chọn
            const selectedRound = item.getAttribute('data-round');
            
            // Hiển thị/ẩn các trận đấu dựa trên vòng đấu được chọn
            if (selectedRound === '0') {
                // Nếu chọn "Tất cả", hiển thị tất cả các trận đấu
                showAllMatches();
            } else {
                // Ẩn tất cả các trận đấu
                matchRounds.forEach(round => {
                    round.style.display = 'none';
                });
                
                // Hiển thị chỉ các trận đấu của vòng được chọn
                const selectedMatches = document.querySelector(`.match-round[data-round="${selectedRound}"]`);
                if (selectedMatches) {
                    selectedMatches.style.display = 'block';
                }
            }
        });
    });
});
