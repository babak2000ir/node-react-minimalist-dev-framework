function Footer() {
    return (
        <footer class="container p-4 rounded">
            <div class="d-lg-flex justify-content-between">
                <div>
                    <img src='/logo.png' alt="Logo" width="60" height="48" class="d-inline-block align-text-top" />
                </div>
                <div class="copyright">
                    <p>developed and maintained by <a href="https://github.com/babak2000ir/node-react-minimalist-dev-framework" target="_blank">Babak</a></p>
                </div>
                <div>
                    <ul class="d-flex gap-3 list-unstyled">
                        <li><a href="#"><i class="bi bi-facebook"></i></a></li>
                        <li><a href="#"><i class="bi bi-twitter"></i></a></li>
                        <li><a href="#"><i class="bi bi-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;