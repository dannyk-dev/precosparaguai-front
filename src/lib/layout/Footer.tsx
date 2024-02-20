const Footer = () => {
    return (
        <footer className="wrapper mt-10 w-full">
            <div className="flex items-center justify-center">
                <p className="text-xs">
                    {new Date().getFullYear()} - Preços no Paraguai
                </p>
            </div>
        </footer>
    );
};

export default Footer;
