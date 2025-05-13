"use client";

import React, {useState} from 'react';

interface CommonStyles {
    sectionTitle: string;
    paragraph: string;
}

interface ContactProps {
    styles: CommonStyles;
}

const ContactInformation = ({styles}: ContactProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div>
            <div
                className="flex items-center justify-center cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <span className="text-xl">
                    {isExpanded ? '▼' : '◀'}
                </span>
                <h2 className={styles.sectionTitle}>Contact Information</h2>
                <span className="text-xl">
                    {isExpanded ? '▼' : '▶'}
                </span>

            </div>

            {isExpanded && (
                <div className="mt-4">
                    <p className={styles.paragraph}>In case of questions, contact me:</p>
                    <ul className="mt-4 space-y-2 text-white mx-8">
                        <li>
                            <strong>Email:</strong>{' '}
                            <a
                                href="mailto:gajownikp@gmail.com"
                                className="hover:underline"
                            >
                                gajownikp@gmail.com
                            </a>
                        </li>
                        <li>
                            <strong>Phone:</strong>{' '}
                            <a
                                href="tel:+48504008035"
                                className="hover:underline"
                            >
                                +48 504-008-035
                            </a>
                        </li>
                        <li>
                            <strong>LinkedIn:</strong>
                            <a href="https://www.linkedin.com/in/piotr-gajownik-a1515a65/"
                               className="text-black hover:underline"
                               target="_blank"
                               rel="noopener noreferrer">
                                Piotr Gajownik
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ContactInformation;