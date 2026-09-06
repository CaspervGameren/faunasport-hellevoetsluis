export const Footer = () => {
    return (
        <footer className="w-full border-t grid grid-cols-2">
            <h2>Page made by: Casper van Gameren</h2>
            <div className="max-w-6xl overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-slate-700 uppercase text-xs tracking-wider">
                            <th className="py-3 px-4">Social Media</th>
                            <th className="py-3 px-4">Contact & Locatie</th>
                            <th className="py-3 px-4">Openingstijden</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-sm">
                        <tr>
                            <td className="py-3 px-4">
                                <a href="https://instagram.com" className="hover:text-white flex items-center gap-2">
                                    <span>Instagram:</span> @faunasport
                                </a>
                            </td>
                            <td className="py-3 px-4">Sportlaan 12, Hellevoetsluis</td>
                            <td className="py-3 px-4">Ma - Vr: 08:00 - 22:00</td>
                        </tr>
                        <tr>
                            <td className="py-3 px-4">
                                <a href="https://facebook.com" className="hover:text-white flex items-center gap-2">
                                    <span>Facebook:</span> /faunasport
                                </a>
                            </td>
                            <td className="py-3 px-4">info@faunasport.nl</td>
                            <td className="py-3 px-4">Za - Zo: 09:00 - 18:00</td>
                        </tr>
                        <tr>
                            <td className="py-3 px-4">
                                <a href="https://linkedin.com" className="hover:text-white flex items-center gap-2">
                                    <span>LinkedIn:</span> FaunaSport BV
                                </a>
                            </td>
                            <td className="py-3 px-4">+31 181 000 000</td>
                            <td className="py-3 px-4">Feestdagen: Gesloten</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </footer>
    );
}