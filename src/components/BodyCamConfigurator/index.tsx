import React, { useState } from 'react';

import { BodyCam } from '../BodyCam';

export function BodyCamConfigurator() {
  const [brandCamera, setBrandName] = useState('COIL BODY');
  const [policeName, setPoliceName] = useState('Mickeal Smith');
  const [policeDepartement, setPoliceDepartement] = useState(
    'LOS SANTOS POLICE DEPARTEMENT',
  );
  const [policerMatricule, setPolicerMatricule] = useState(100);
  const [fullCaps, setFullCaps] = useState(true);

  const [dashCamStatus, setDashCamStatus] = useState(true);
  const [twelveHoursSys, setTwelveHoursSys] = useState(false);

  let link = `http://localhost:3000/overlay/?cameraBrand=${brandCamera}&policeName=${policeName}&policeDepartement=${policeDepartement}&policeNumber=${policerMatricule}&dashcamstatus=${dashCamStatus}&twelvehours=${twelveHoursSys}&fullcaps=${fullCaps}`;

  return (
    <div>
      <div className="bodyCamPreviewer" data-tip="Preview">
        <BodyCam
          name={policeName}
          matricule={policerMatricule}
          departement={policeDepartement}
          cameraBrand={brandCamera}
          isActivated={dashCamStatus}
          fullCaps={fullCaps}
          twelveHoursSys={twelveHoursSys}
        />
      </div>
      <div className="bodyCamConfigurator mt-6 grid-configurator">
        <div className="configurator1">
          <input
            type="text"
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-900 bg-gray-900 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            placeholder="Brand Camera"
            value={brandCamera}
            onChange={(e) => setBrandName(e.currentTarget.value)}
          />
        </div>
        <div className="configurator2">
          <input
            type="text"
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-900 bg-gray-900 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            placeholder="Police Name"
            value={policeName}
            onChange={(e) => setPoliceName(e.currentTarget.value)}
          />
        </div>
        <div className="configurator3">
          <input
            type="number"
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-900	bg-gray-900 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            placeholder="Police Matricule"
            maxLength={3}
            min={1}
            minLength={1}
            value={policerMatricule}
            onChange={(e) => setPolicerMatricule(e.currentTarget.value)}
          />
        </div>
        <div className="configurator4">
          <input
            type="text"
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-900 bg-gray-900 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            placeholder="Police Departement"
            value={policeDepartement}
            onChange={(e) => setPoliceDepartement(e.currentTarget.value)}
          />
        </div>
        <div className="configurator5">
          <div>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600 cursor-pointer	"
              defaultChecked={dashCamStatus}
              onChange={() => setDashCamStatus(!dashCamStatus)}
            />
            <span className="ml-2 text-blueGray-600">DashCam On</span>
          </div>
          <div>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600 cursor-pointer"
              defaultChecked={twelveHoursSys}
              onChange={() => setTwelveHoursSys(!twelveHoursSys)}
            />
            <span className="ml-2 text-blueGray-600">12H System</span>
          </div>
          <div data-tip="Si vous activez cette fonctionnalité, tous les textes seront systématiquement en majuscule.">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600 cursor-pointer"
              defaultChecked={fullCaps}
              onChange={() => setFullCaps(!fullCaps)}
            />
            <span className="ml-2 text-blueGray-600">Full Caps</span>
          </div>
        </div>
        <div
          className="configurator6"
          data-tip="Vous pouvez créer un lien qui vous permettra de l'afficher sur votre live.">
          <a
            target="_blank"
            onClick={() => navigator.clipboard.writeText(link)}
            href={link}
            className="py-2 px-4 bg-emerald-500 text-white font-semibold rounded-lg bg-green-500 shadow-md focus:outline-none w-full"
            rel="noreferrer">
            Crée le lien.
          </a>
        </div>
      </div>
    </div>
  );
}
