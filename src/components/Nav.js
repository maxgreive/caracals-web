import React from "react";
import { Link } from "gatsby";

const links = [
  {
    label: 'Home',
    link: '/'
  },
  {
    label: 'Training',
    link: '/training'
  },
  {
    label: 'CaraGals Damen',
    link: '/training'
  },
  {
    label: 'Caramba Juniors',
    link: '/caramba'
  },
  {
    label: 'Mitgliedschaft',
    link: '/membership'
  }
];

export default function Nav() {
  return (
    <div className="fixed w-full top-0 bg-white z-50">
      <div className="container pt-6 mx-auto px-4">
        <div className="flex justify-between">
          <div className="text-xl uppercase mb-2">
            <span className="font-bold">Caracals</span><span className="mx-2">|</span><span>SSV Germania</span>
          </div>
        </div>
        <ul className="flex row font-bold tracking-tight">
          {
            links.map((link, index) => (
              <li className={`${index ? 'ml-8' : ''}`} key={link.label}><Link to={link.link} className="uppercase block pt-2 pb-4 hover:text-slate-600 hover:border-slate-700 border-transparent border-b-2">{link.label}</Link></li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}