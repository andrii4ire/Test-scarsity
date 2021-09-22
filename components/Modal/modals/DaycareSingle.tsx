import HeadlessUIModal from '../HeadlessUIModal'
import ModalHeader from '../ModalHeader'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { SummonerFullData } from '../../../hooks/useRarityLibrary'
import useRarityDaycare from '../../../hooks/useRarityDaycare'

interface TransferModalProps {
    open: boolean
    closeFunction: () => void
    summoner: SummonerFullData
}

export default function DaycareSingleModal({ open, closeFunction, summoner }: TransferModalProps): JSX.Element {
    const { registerDaycare } = useRarityDaycare()

    const [days, setDays] = useState(0)

    async function registerConfirm() {
        await toast.promise(registerDaycare([summoner.id], days), {
            loading: <b>Registering summoner</b>,
            success: <b>Success</b>,
            error: <b>Failed</b>,
        })
        closeFunction()
    }

    return (
        <HeadlessUIModal isOpen={open} onDismiss={closeFunction}>
            <div className="bg-background-end rounded-lg border-2 border-white">
                <ModalHeader title='summoner daily care' onClose={closeFunction} />
                <div className="text-center text-white p-4 pb-2 gap-5">
                    <h2>The daily care is a community run system to take care of your summoners</h2>
                </div>
                <div className="text-center text-white p-4 pb-2 gap-5">
                    <h2>The service has a fee of 0.1 FTM for each summoner for each day.</h2>
                </div>
                <div className="text-center text-white p-4 pb-2 gap-5">
                    <h2>
                        This summoner is registered for  <b>{summoner.misc.daycare_days_paid}</b>{' '}
                        days in the daily care. 
                    </h2>
                </div>
                <div className="text-center text-white p-4 pb-2 gap-5">
                    <h2>How many days do you want to register your summoner/s?</h2>
                </div>
                <div className="text-center text-white p-4 pb-4 gap-5">
                    <input
                        type="number"
                        className="p-2 text-background-end"
                        onChange={(v) => setDays(parseInt(v.target.value))}
                    />
                </div>
                <div className="flex flex-row justify-center pb-8">
                    <div className="bg-background-middle hover:bg-background-start text-white border-white border-2 rounded-lg mx-4">
                        <button className="w-full uppercase px-2 py-1" onClick={async () => await registerConfirm()}>
                            <h2>register summoner</h2>
                        </button>
                    </div>
                </div>
            </div>
        </HeadlessUIModal>
    )
}
