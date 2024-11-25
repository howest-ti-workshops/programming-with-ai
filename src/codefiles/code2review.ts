import {
    DomainException,
    Tournament,
    TournamentCreated,
    TournamentType,
} from 'MtgTournament/Domain/mod.ts';
import {
    CreateTournamentInput,
    CreateTournamentOutput,
    OutputPort,
    type Publisher,
    TournamentRepository,
    UseCase,
} from 'MtgTournament/Application/Contracts/mod.ts';

export class CreateTournament implements UseCase<CreateTournamentInput> {
    private readonly _outputPort: OutputPort<CreateTournamentOutput>;
    private readonly _tournamentRepository: TournamentRepository;
    private readonly _eventPublisher: Publisher;

    constructor(
        outputPort: OutputPort<CreateTournamentOutput>,
        tournamentRepository: TournamentRepository,
        eventPublisher: Publisher,
    ) {
        this._outputPort = outputPort;
        this._tournamentRepository = tournamentRepository;
        this._eventPublisher = eventPublisher;
    }

    public async execute(input: CreateTournamentInput): Promise<void> {
        const tournamentType = this.mapTypeToEnum(input.type);

        const tournament = Tournament.create(
            input.name,
            tournamentType,
            input.organizerName,
            input.maximumPlayers,
        );

        await this._tournamentRepository.save(tournament);
        this._outputPort.present({ id: tournament.id.toString() });

        this._eventPublisher.publish(TournamentCreated.create(
            tournament.id,
            tournament.name,
            tournament.type,
            tournament.organizer,
            tournament.maximumNumberOfPlayers,
        ));
    }

    private mapTypeToEnum(type: string): TournamentType {
        switch (type) {
            case 'LimitedSealed':
                return TournamentType.LimitedSealed;
            case 'LimitedDraft':
                return TournamentType.LimitedDraft;
            case 'Standard':
                return TournamentType.Standard;
            case 'Modern':
                return TournamentType.Modern;
            case 'Pioneer':
                return TournamentType.Pioneer;
            case 'Legacy':
                return TournamentType.Legacy;
            case 'Vintage':
                return TournamentType.Vintage;
            default:
                throw new DomainException('Invalid tournament type');
        }
    }
}
