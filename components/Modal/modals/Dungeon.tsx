import HeadlessUIModal from '../HeadlessUIModal'
import ModalHeader from '../ModalHeader'
import React, { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { SummonerFullData } from '../../../hooks/useRarityLibrary'
import { chunkArrayByNumber } from '../../../functions/array'
import useRarityHelper from '../../../hooks/useRarityHelper'
import useRarity from '../../../hooks/useRarity'
import { RARITY_HELPER_ADDRESS } from '../../../constants'
import useActiveWeb3React from '../../../hooks/useActiveWeb3React'

interface DungeonModalProps {
    open: boolean
    closeFunction: () => void
    summoners: SummonerFullData[]
}

export default function DungeonModal({ open, closeFunction, summoners }: DungeonModalProps): JSX.Element {
    const { account } = useActiveWeb3React()

    const { isApprovedForAll, setApprovalForAll } = useRarity()

    const { cellar, cellar_donate, is_approved } = useRarityHelper()

    const [approved, setApproved] = useState(false)

    const fetch_approval = useCallback(async () => {
        const approved = await isApprovedForAll(account, RARITY_HELPER_ADDRESS)
        setApproved(approved)
    }, [account, isApprovedForAll])

    useEffect(() => {
        fetch_approval()
    }, [summoners, fetch_approval])

    async function approveHelper() {
        toast
            .promise(setApprovalForAll(RARITY_HELPER_ADDRESS), {
                loading: <b>Approving helper contract</b>,
                success: <b>Success</b>,
                error: <b>Failed</b>,
            })
            .then(() => setApproved(true))
    }

    async function submit() {
        const chunks = chunkArrayByNumber(summoners, 100)
        for (let i = 0; i < chunks.length; i++) {
            const chunk_summoners = chunks[i].map((s) => {
                return s.id
            })
            const approvals = await is_approved(chunk_summoners)
            const summoners_approve = []
            for (let j = 0; j < approvals.length; j++) {
                if (!approvals[j]) {
                    summoners_approve.push(chunk_summoners[j])
                }
            }
            await toast.promise(cellar(chunk_summoners, summoners_approve), {
                loading: (
                    <b>
                        Sending chunk: {i + 1} of {chunks.length}{' '}
                    </b>
                ),
                success: <b>Success</b>,
                error: <b>Failed</b>,
            })
        }
    }

    async function submitTIP() {
        const chunks = chunkArrayByNumber(summoners, 100)
        for (let i = 0; i < chunks.length; i++) {
            const chunk_summoners = chunks[i].map((s) => {
                return s.id
            })
            const approvals = await is_approved(chunk_summoners)
            const summoners_approve = []
            for (let j = 0; j < approvals.length; j++) {
                if (!approvals[j]) {
                    summoners_approve.push(chunk_summoners[j])
                }
            }

            if (i === 0) {
                await toast.promise(cellar_donate(chunk_summoners, summoners_approve), {
                    loading: (
                        <b>
                            Sending chunk: {i + 1} of {chunks.length}{' '}
                        </b>
                    ),
                    success: <b>Success</b>,
                    error: <b>Failed</b>,
                })
            } else {
                await toast.promise(cellar(chunk_summoners, summoners_approve), {
                    loading: (
                        <b>
                            Sending chunk: {i + 1} of {chunks.length}{' '}
                        </b>
                    ),
                    success: <b>Success</b>,
                    error: <b>Failed</b>,
                })
            }
        }
    }

    return (
        <HeadlessUIModal isOpen={open} onDismiss={closeFunction}>
            <div className="bg-background-end rounded-lg border-2 border-white">
                <ModalHeader title='cellar summoners' onClose={closeFunction} />
                <div className="text-center text-white p-4 pb-8 gap-5">
                    {summoners.length > 0 ? (
                        <div>
                            <h2>
                                You have {summoners.length}{' '}
                                summoners available to send to the cellar.{' '}
                            </h2>
                            {summoners.length >= 100 && (
                                <h2 className="mt-1">We will send 1 transaction for each 100 summoners</h2>
                            )}
                            {approved ? (
                                <>
                                    {summoners.length >= 10 && (
                                        <div>
                                            <button
                                                onClick={() => submitTIP()}
                                                className="bg-green border-white border-2 p-2 uppercase rounded-lg mt-4"
                                            >
                                                send with 0.1 FTM tip for devs
                                            </button>
                                        </div>
                                    )}
                                    <div>
                                        <button
                                            onClick={() => submit()}
                                            className="bg-green border-white border-2 p-2 uppercase rounded-lg mt-4"
                                        >
                                            send summoners
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <button
                                    onClick={() => approveHelper()}
                                    className="bg-green border-white border-2 p-2 uppercase rounded-lg mt-4"
                                >
                                    approve helper
                                </button>
                            )}
                        </div>
                    ) : (
                        <div>
                            <h2>No summoners available for cellar </h2>
                        </div>
                    )}
                </div>
            </div>
        </HeadlessUIModal>
    )
}
