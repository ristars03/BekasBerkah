import { useState } from 'react';

const Privacy = () => {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (section) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <div className="px-24 py-[70px] bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full">
                <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>

                <div className="mb-4">
                    <button
                        onClick={() => toggleSection('intro')}
                        className="w-full text-left font-semibold text-lg flex justify-between items-center"
                    >
                        Pendahuluan
                        <span>{openSections['intro'] ? '▲' : '▼'}</span>
                    </button>
                    {openSections['intro'] && (
                        <div className="mt-2">
                            <p>Selamat datang di Platform Bekasberkah.com! Kami menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi Anda. Pemberitahuan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan membagikan informasi Anda ketika Anda menggunakan platform kami.</p>
                        </div>
                    )}
                </div>

                <div className="mb-4">
                    <button
                        onClick={() => toggleSection('info')}
                        className="w-full text-left font-semibold text-lg flex justify-between items-center"
                    >
                        Informasi yang kami kumpulkan
                        <span>{openSections['info'] ? '▲' : '▼'}</span>
                    </button>
                    {openSections['info'] && (
                        <div className="mt-2">
                            <p>Kami mengumpulkan berbagai jenis informasi untuk menyediakan dan meningkatkan layanan kami, termasuk :</p>
                            <ol className="list-decimal list-inside">
                                <li>Informasi Akun: Nama, alamat email, nomor telepon, dan alamat fisik Anda.</li>
                                <li>Informasi Transaksi: Detail transaksi barang bekas yang Anda jual atau beli.</li>
                                <li>Informasi Penggunaan: Data tentang bagaimana Anda menggunakan platform kami, termasuk data log, alamat IP, dan informasi perangkat.</li>
                                <li>Informasi Lokasi: Jika Anda memilih untuk berbagi,  kami mengumpulkan informasi lokasi untuk membantu menemukan barang bekas terdekat.</li>
                            </ol>
                        </div>
                    )}
                </div>

                <div className="mb-4">
                    <button
                        onClick={() => toggleSection('usage')}
                        className="w-full text-left font-semibold text-lg flex justify-between items-center"
                    >
                        Penggunaan Informasi
                        <span>{openSections['usage'] ? '▲' : '▼'}</span>
                    </button>
                    {openSections['usage'] && (
                        <div className="mt-2">
                            <p>Kami menggunakan informasi Anda untuk :</p>
                            <ol className="list-decimal list-inside">
                                <li>Menyediakan dan mengelola layanan kami.</li>
                                <li>Memproses transaksi dan mengirimkan konfirmasi.</li>
                                <li>Menyediakan dukungan pelanggan dan menjawab pertanyaan Anda.</li>
                                <li>Meningkatkan dan mengoptimalkan layanan kami.</li>
                                <li>Mengirimkan komunikasi pemasaran dan promosi yang relevan (dengan persetujuan Anda).</li>
                            </ol>
                        </div>
                    )}
                </div>

                <div className="mb-4">
                    <button
                        onClick={() => toggleSection('sharing')}
                        className="w-full text-left font-semibold text-lg flex justify-between items-center"
                    >
                        Berbagi Informasi
                        <span>{openSections['sharing'] ? '▲' : '▼'}</span>
                    </button>
                    {openSections['sharing'] && (
                        <div className="mt-2">
                            <p>Kami tidak akan membagikan informasi pribadi Anda kepada pihak ketiga, kecuali :</p>
                            <ol className="list-decimal list-inside">
                                <li>Dengan penyedia layanan pihak ketiga yang membantu kami dalam mengoperasikan platform.</li>
                                <li>Jika diwajibkan oleh hukum atau untuk melindungi hak dan keamanan kami.</li>
                                <li>Dalam kasus penggabungan, akuisisi, atau penjualan aset perusahaan.</li>
                            </ol>
                        </div>
                    )}
                </div>

                <div className="mb-4">
                    <button
                        onClick={() => toggleSection('security')}
                        className="w-full text-left font-semibold text-lg flex justify-between items-center"
                    >
                        Keamanan Informasi
                        <span>{openSections['security'] ? '▲' : '▼'}</span>
                    </button>
                    {openSections['security'] && (
                        <div className="mt-2">
                            <p>Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi informasi Anda dari akses yang tidak sah, penggunaan, atau pengungkapan. Namun, tidak ada sistem keamanan yang sepenuhnya aman, sehingga kami tidak dapat menjamin keamanan absolut.</p>
                        </div>
                    )}
                </div>

                <div className="mb-4">
                    <button
                        onClick={() => toggleSection('rights')}
                        className="w-full text-left font-semibold text-lg flex justify-between items-center"
                    >
                        Hak Anda
                        <span>{openSections['rights'] ? '▲' : '▼'}</span>
                    </button>
                    {openSections['rights'] && (
                        <div className="mt-2">
                            <p>Anda memiliki hak untuk :</p>
                            <ol className="list-decimal list-inside">
                                <li>Mengakses dan memperbarui informasi pribadi Anda.</li>
                                <li>Meminta penghapusan informasi pribadi Anda.</li>
                                <li>Menolak pengolahan data pribadi untuk tujuan pemasaran.</li>
                            </ol>
                        </div>
                    )}
                </div>

                <div className="mb-4">
                    <button
                        onClick={() => toggleSection('changes')}
                        className="w-full text-left font-semibold text-lg flex justify-between items-center"
                    >
                        Perubahan pada pemberitahuan informasi ini
                        <span>{openSections['changes'] ? '▲' : '▼'}</span>
                    </button>
                    {openSections['changes'] && (
                        <div className="mt-2">
                            <p>Kami dapat memperbarui Pemberitahuan Privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui platform kami, dan tanggal pembaruan akan dicantumkan di bagian atas pemberitahuan ini.</p>
                        </div>
                    )}
                </div>

                <div className="mb-4">
                    <button
                        onClick={() => toggleSection('contact')}
                        className="w-full text-left font-semibold text-lg flex justify-between items-center"
                    >
                        Hubungi Kami
                        <span>{openSections['contact'] ? '▲' : '▼'}</span>
                    </button>
                    {openSections['contact'] && (
                        <div className="mt-2">
                            <p>Jika Anda memiliki pertanyaan tentang Pemberitahuan Privasi ini,  silakan hubungi kami di :</p>
                            <ol className="list-decimal list-inside">
                                <li>Email: bekasekarh@company.com</li>
                                <li>Telepon: (+62) 874856982</li>
                                <li>Alamat: Bandung Indonesia, 40135</li>
                            </ol>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Privacy;
